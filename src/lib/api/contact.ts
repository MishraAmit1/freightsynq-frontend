import { supabase } from '@/lib/supabase';

export interface ContactFormData {
    // Basic fields
    first_name: string;
    last_name: string;
    name?: string; // Full name (backward compatibility)
    email: string;
    phone: string;

    // Company info
    company?: string;
    fleet_size?: string;

    // Inquiry details
    reason: 'demo' | 'sales' | 'support' | 'other';
    message: string;

    // Optional fields (for future use)
    service_type?: string;
    expected_vehicles?: string;
    implementation_timeline?: string;
    source?: string;
}

export async function submitContactForm(formData: ContactFormData): Promise<{ success: boolean; error?: string }> {
    try {
        // Prepare data matching the database structure
        const submissionData = {
            first_name: formData.first_name,
            last_name: formData.last_name,
            name: formData.name || `${formData.first_name} ${formData.last_name}`,
            email: formData.email,
            phone: formData.phone,
            company: formData.company || null,
            fleet_size: formData.fleet_size || null,
            reason: formData.reason,
            message: formData.message,
            service_type: formData.service_type || null,
            expected_vehicles: formData.expected_vehicles || null,
            implementation_timeline: formData.implementation_timeline || null,
            source: formData.source || 'Website Form',
            status: 'new'
        };

        const { data, error } = await supabase
            .from('contact_submissions')
            .insert([submissionData])
            .select();

        if (error) {
            console.error('Error submitting contact form:', error);
            return { success: false, error: error.message };
        }

        // Optional: Send email notification (add your email service here)
        // await sendNotificationEmail(submissionData);

        return { success: true };
    } catch (err) {
        console.error('Exception submitting contact form:', err);
        return { success: false, error: 'An unexpected error occurred' };
    }
}

// Helper function to get all contact reasons
export const contactReasons = [
    { value: 'demo', label: 'Schedule a Demo', description: 'See FreightSync in action' },
    { value: 'sales', label: 'Sales Inquiry', description: 'Discuss pricing and features' },
    { value: 'support', label: 'Technical Support', description: 'Get help with existing account' },
    { value: 'other', label: 'Other', description: 'General inquiry' }
] as const;

// Helper function to get fleet size options
export const fleetSizeOptions = [
    '1-10 vehicles',
    '10-50 vehicles',
    '50-100 vehicles',
    '100+ vehicles'
] as const;