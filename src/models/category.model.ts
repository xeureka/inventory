import mongoose,{model,Schema,Document} from "mongoose";

interface CategoryType extends Document{
    name: string,
    description: string
}

const categorySchema = new Schema<CategoryType>({
    name: {
        type: String,
        required: [true, "name of cateogry is required"],
        trim: true,
    } as any,
    description: {
        type: String,
        required: [true, "description of cateogry is required"],
        trim: true,
        minlength: 4
    } as any
})

const Categories = model("Category",categorySchema)

export default Categories;
