/*
{
  "_id": "65fa9...",
  "name": "Laptop",
  "price": 1200,
  "quantity": 10,
  "category": "65fa1...",
  "description": "Dell XPS",
  "createdAt": "...",
  "updatedAt": "..."
}


*/
import * as z from "zod"

/*z.string();
z.number();
z.bigint();
z.boolean();
z.symbol();
z.undefined();
z.null(); */

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
