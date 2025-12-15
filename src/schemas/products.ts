import * as z from "zod"

export const productInputSchema = z.object({
  name: z.string().min(2, "Name of product must be at least 3 character."),
  price: z.number(),
  quantity: z.number(),
  category: z.string(),
  description: z.string()
})

export const categoryInputSchema = z.object({
    name: z.string().min(2, "Name of the product must be at leaset 3 character."),
    description: z.string().min(3, "Description of the product must be at least of 4 character.")
})
