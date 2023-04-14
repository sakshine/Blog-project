const { findById } = require('../../models/Category')
const CategoryModel = require('../../models/Category')
const cloudinary = require('cloudinary').v2
cloudinary.config({
    cloud_name: 'dwkppmaym',
    api_key: '359479626141935',
    api_secret: 'Q70MRVgOb7RKsAbWOZw5gYCUKWE',
    secure: false
});
class CategoryController {
    static categorydisplay = async (req, res) => {
        const data = await CategoryModel.find()
        res.render('admin/category/categorydisplay', { d: data })

    }
    static categoryinsert = async (req, res) => {
        const file = req.files.image
        const myimage = await cloudinary.uploader.upload(file.tempFilePath, {
            folder: 'category_image'
        })
        try {
            const result = new CategoryModel({
                title: req.body.title,
                image: {
                    public_id: myimage.public_id,
                    url: myimage.secure_url

                }
            })
            await result.save(res.redirect('admin/category'))
            // res.redirect('/admin/categorydisplay')

        } catch (err) {
            console.log(err)
        }
    }
    static categoryview = async (req, res) => {
        try {
            const result = await CategoryModel.findById(req.params.id)
            console.log(result)
            res.render('admin/category/categoryview', { b: result })
        } catch (err) {
            console.log(err)
        }
    }
    static categoryedit = async (req, res) => {
        try {
            const result = await CategoryModel.findById(req.params.id)
            res.render('admin/category/categoryedit', { categoryedit: result })
        } catch (err) {
            console.log(err)
        }
    }
    static categoryupdate = async (req, res) => {
        const file = req.files.image
        const myimage = await cloudinary.uploader.upload(file.tempFilePath, {
            folder: 'category_image'
        })

        try {
            const categorydata = await CategoryModel.findById(req.params.id)
            const imageid = categorydata.image.public_id
            await cloudinary.uploader.destroy(imageid)
            const result = await CategoryModel.findByIdAndUpdate(req.params.id, {
                title: req.body.title,
                image: {
                    public_id: myimage.public_id,
                    url: myimage.secure_url,

                },
            })
            await result.save()
            res.redirect('/admin/category')
        } catch (err) {
            console.log(err)
        }
    }
    static categorydelete = async (req, res) => {

        try {
            const categorydata = await CategoryModel.findById(req.params.id)
            console.log(categorydata)
            const imageid = categorydata.image.public_id
            await cloudinary.uploader.destroy(imageid)

            const result = await CategoryModel.findByIdAndDelete(req.params.id)
            res.redirect('/admin/category')

        } catch (err) {
            console.log(err)
        }
    }

}
module.exports = CategoryController