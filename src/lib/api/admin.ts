// lib/api/admin.ts
import { supabase } from '@/lib/supabase'

// ============= AUTH FUNCTIONS =============
export async function signInAdmin(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    })

    if (error) return { error: error.message }

    // Check if user is admin
    const { data: adminUser } = await supabase
        .from('admin_users')
        .select('*')
        .eq('email', email)
        .single()

    if (!adminUser) {
        await supabase.auth.signOut()
        return { error: 'Not authorized as admin' }
    }

    return { data }
}

export async function signOutAdmin() {
    const { error } = await supabase.auth.signOut()
    return { error }
}

// ============= DASHBOARD STATS =============
// lib/api/admin.ts - Update getDashboardStats
export async function getDashboardStats() {
    const [blogs, contacts, demos, sales] = await Promise.all([
        supabase.from('blogs').select('*', { count: 'exact', head: true }),
        supabase.from('contact_submissions').select('*', { count: 'exact', head: true }),
        supabase.from('contact_submissions')
            .select('*', { count: 'exact', head: true })
            .eq('reason', 'demo'),
        supabase.from('contact_submissions')
            .select('*', { count: 'exact', head: true })
            .eq('reason', 'sales'),
    ])

    return {
        totalBlogs: blogs.count || 0,
        totalContacts: contacts.count || 0,
        demoRequests: demos.count || 0,
        salesInquiries: sales.count || 0,
    }
}

// ============= CONTACT SUBMISSIONS =============

// Get all contact submissions
// ============= CONTACT SUBMISSIONS (Updated for FreightSync) =============

export async function createContactSubmission(data: {
    firstName: string
    lastName: string
    email: string
    phone: string
    company?: string
    fleetSize?: string
    reason: string
    message: string
}) {
    // Combine first and last name for backward compatibility
    const submissionData = {
        first_name: data.firstName,
        last_name: data.lastName,
        name: `${data.firstName} ${data.lastName}`,
        email: data.email,
        phone: data.phone,
        company: data.company || null,
        fleet_size: data.fleetSize || null,
        reason: data.reason,
        message: data.message,
        status: 'new',
        // These can be null for now
        service_type: null,
        expected_vehicles: null,
        implementation_timeline: null,
        source: 'Website Form'
    }

    const { data: contact, error } = await supabase
        .from('contact_submissions')
        .insert([submissionData])
        .select()
        .single()

    return { data: contact, error }
}

// Update the getAllContactSubmissions to include new fields
export async function getAllContactSubmissions() {
    const { data, error } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false })

    if (error) {
        console.error('Error fetching contacts:', error)
        return []
    }

    // Format data for display
    return data?.map(contact => ({
        ...contact,
        full_name: contact.name || `${contact.first_name} ${contact.last_name}`,
        inquiry_type: contact.reason || 'general'
    })) || []
}
// Get single contact submission
export async function getContactById(id: number) {
    const { data, error } = await supabase
        .from('contact_submissions')
        .select('*')
        .eq('id', id)
        .single()

    if (error) {
        console.error('Error fetching contact:', error)
        return null
    }

    return data
}

export async function updateContactStatus(id: number, status: string) {
    const { error } = await supabase
        .from('contact_submissions')
        .update({ status, updated_at: new Date().toISOString() })
        .eq('id', id)

    return { error }
}

export async function deleteContact(id: number) {
    const { error } = await supabase
        .from('contact_submissions')
        .delete()
        .eq('id', id)

    return { error }
}

// ============= BLOGS CRUD =============

// Get all blogs
export async function getAllBlogs() {
    const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .order('created_at', { ascending: false })

    if (error) {
        console.error('Error fetching blogs:', error)
        return []
    }

    return data || []
}

// Get single blog
export async function getBlogById(id: string) {
    const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('id', id)
        .single()

    if (error) {
        console.error('Error fetching blog:', error)
        return null
    }

    return data
}

export async function createBlog(data: any) {
    // Generate slug if not provided
    if (!data.slug && data.title) {
        data.slug = data.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '')
    }

    const { data: blog, error } = await supabase
        .from('blogs')
        .insert([data])
        .select()
        .single()

    return { data: blog, error }
}

export async function updateBlog(id: string, data: any) {
    const { data: blog, error } = await supabase
        .from('blogs')
        .update({ ...data, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single()

    return { data: blog, error }
}

export async function deleteBlog(id: string) {
    const { error } = await supabase
        .from('blogs')
        .delete()
        .eq('id', id)

    return { error }
}

// ============= UTILITY FUNCTIONS =============

// Upload image to Supabase Storage
export async function uploadImage(file: File, folder: string = 'uploads') {
    const fileExt = file.name.split('.').pop()
    const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`
    const filePath = `${folder}/${fileName}`

    const { data, error } = await supabase.storage
        .from('project-images') // Your existing bucket
        .upload(filePath, file, {
            cacheControl: '3600',
            upsert: false
        })

    if (error) {
        console.error('Error uploading image:', error)
        return { error }
    }

    // Get public URL
    const { data: { publicUrl } } = supabase.storage
        .from('project-images')
        .getPublicUrl(filePath)

    return { data: publicUrl, error: null }
}

// Upload blog image specifically
export async function uploadBlogImage(file: File) {
    const fileExt = file.name.split('.').pop()
    const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`
    const filePath = `blogs/${fileName}`

    const { data, error } = await supabase.storage
        .from('project-images') // Use your existing bucket
        .upload(filePath, file, {
            cacheControl: '3600',
            upsert: false
        })

    if (error) {
        console.error('Error uploading blog image:', error)
        return { error }
    }

    // Get public URL
    const { data: { publicUrl } } = supabase.storage
        .from('project-images')
        .getPublicUrl(filePath)

    return { data: publicUrl, error: null }
}

// Delete image from Supabase Storage
export async function deleteImage(url: string, bucket: string = 'project-images') {
    // Extract file path from URL
    const urlParts = url.split(`/storage/v1/object/public/${bucket}/`)
    if (urlParts.length !== 2) return { error: 'Invalid URL' }

    const filePath = urlParts[1]

    const { error } = await supabase.storage
        .from(bucket)
        .remove([filePath])

    return { error }
}