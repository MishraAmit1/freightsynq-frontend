'use server';
/**
 * @fileOverview A Genkit flow that predicts potential delivery delays based on weather and traffic conditions.
 *
 * - predictDeliveryDelay - A function that predicts delivery delays.
 * - PredictiveDelayInput - The input type for the predictDeliveryDelay function.
 * - PredictiveDelayOutput - The return type for the predictDeliveryDelay function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PredictiveDelayInputSchema = z.object({
  origin: z.string().describe('The origin location of the delivery.'),
  destination: z.string().describe('The destination location of the delivery.'),
  currentLocation: z.string().describe('The current location of the delivery vehicle.'),
  estimatedArrivalTime: z.string().describe('The estimated arrival time of the delivery.'),
  vehicleType: z.string().describe('The type of vehicle used for the delivery.'),
  cargoDescription: z.string().describe('A description of the cargo being delivered.'),
});
export type PredictiveDelayInput = z.infer<typeof PredictiveDelayInputSchema>;

const PredictiveDelayOutputSchema = z.object({
  delayLikelihood: z
    .string()
    .describe(
      'The likelihood of a delay, expressed as a percentage (e.g., "20%") or a descriptive term (e.g., "high", "medium", "low").'
    ),
  delayReason: z
    .string()
    .describe('The reason for the predicted delay, based on weather and traffic conditions.'),
  suggestedAction: z
    .string()
    .describe(
      'A suggested action to mitigate the delay, such as rerouting or notifying the client.'
    ),
});
export type PredictiveDelayOutput = z.infer<typeof PredictiveDelayOutputSchema>;

export async function predictDeliveryDelay(
  input: PredictiveDelayInput
): Promise<PredictiveDelayOutput> {
  return predictiveDelayFlow(input);
}

const prompt = ai.definePrompt({
  name: 'predictiveDelayPrompt',
  input: {schema: PredictiveDelayInputSchema},
  output: {schema: PredictiveDelayOutputSchema},
  prompt: `You are an AI assistant that predicts potential delivery delays based on weather and traffic conditions and suggests actions to mitigate them.

  Given the following information, analyze the potential for delivery delays:

  Origin: {{origin}}
  Destination: {{destination}}
  Current Location: {{currentLocation}}
  Estimated Arrival Time: {{estimatedArrivalTime}}
  Vehicle Type: {{vehicleType}}
  Cargo Description: {{cargoDescription}}

  Consider current weather and traffic conditions between the current location and destination.

  Provide the likelihood of a delay, the reason for the delay, and a suggested action.

  Likelihood of Delay: {{delayLikelihood}}
  Reason for Delay: {{delayReason}}
  Suggested Action: {{suggestedAction}}`,
});

const predictiveDelayFlow = ai.defineFlow(
  {
    name: 'predictiveDelayFlow',
    inputSchema: PredictiveDelayInputSchema,
    outputSchema: PredictiveDelayOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
