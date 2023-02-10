import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../elements/Loader'
import Message from '../elements/Message'
import FormContainer from '../elements/FormContainer'
import { listProductDetails, updateProduct } from '../actions/productActions'
import { PRODUCT_UPDATE_RESET } from '../constants/productConstanst'


function ProductEditScreen({ match }) {

    const {id} = useParams()
    const productId = id
    const location = useLocation()
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [lastname, setLastName] = useState('')
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState('')
    const [category, setCategory] = useState('')
    const [amountInStock, setAmountInStock] = useState(0)
    const [description, setDescription] = useState('')
    const [uploading, setUploading] = useState(false)



    const dispatch = useDispatch()
        
    const productDetails = useSelector(state => state.productDetails)
    const { error, loading, product } = productDetails

    const productUpdate = useSelector(state => state.productUpdate)
    const { error: errorUpdate, loading: loadingUpdate, success: successUpdate } = productUpdate

    
    useEffect(() => {   

        if(successUpdate) {
            dispatch({ type: PRODUCT_UPDATE_RESET })
            navigate('/admin/productlist')
        } else {
            if (!product.name || product._id !== Number(productId)) {
                dispatch(listProductDetails(productId))
            } else {
                setName(product.name)
                setLastName(product.lastname)
                setPrice(product.price)
                setImage(product.image)
                setCategory(product.category)
                setAmountInStock(product.amountInStock)
                setDescription(product.description)

            }
        }


    }, [dispatch, product, productId, navigate, successUpdate])
         
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateProduct({
            _id: productId,
            name,
            lastname,
            price,
            image,
            category,
            amountInStock,
            description
        }))
        // Update product
    }

    const uploadFileHandler = async (e) => {
        const file = e.target.files[0]
        const formData = new FormData()

        formData.append('image', file)
        formData.append('product_id', productId)

        setUploading(true)

        try{
            const config = {
                headers:{
                    'Content-Type':'multipart/form-data'
                }
            }

            const {data} = await axios.post('/api/products/upload/', formData, config)

            setImage(data)
            setUploading(false)

        } catch (error) {
            setUploading(false)
        }

    }
    
    return (
        <div>
            <Link to='/admin/productlist'>
                Go Back
            </Link>
            <FormContainer>
                <h1>Edit Product</h1>
                {loadingUpdate && <Loader />}
                {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}

                {loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message>
                 : (
                    <Form onSubmit={submitHandler}>

                    <Form.Group controlId='name'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control

                                type='name'
                                placeholder="Enter name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            >
                            </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='lastname'>
                            <Form.Label>Lastname</Form.Label>
                            <Form.Control

                                type='name'
                                placeholder="Enter lastname"
                                value={lastname}
                                onChange={(e) => setLastName(e.target.value)}
                            >
                            </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='price'>
                            <Form.Label>Price</Form.Label>
                            <Form.Control

                                type='name'
                                placeholder="Enter price"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            >
                            </Form.Control>
                    </Form.Group>

                        <Form.Group controlId='image'>
                            <Form.Label>Image</Form.Label>
                            <Form.Control

                                type='text'
                                placeholder="Enter image"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                            >
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="formFile" className="mb-3"> 
                            <Form.Label>Upload Image</Form.Label>
                            <Form.Control
                                type="file"
                                label="Choose File"
                                //custom
                                onChange={uploadFileHandler} />
                        </Form.Group>
                        {uploading && <Loader />}

                    <Form.Group controlId='amountinstock'>
                            <Form.Label>Stock</Form.Label>
                            <Form.Control

                                type='number'
                                placeholder="Enter stock"
                                value={amountInStock}
                                onChange={(e) => setAmountInStock(e.target.value)}
                            >
                            </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='category'>
                            <Form.Label>Category</Form.Label>
                            <Form.Control

                                type='text'
                                placeholder="Enter category"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
                            </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='description'>
                            <Form.Label>description</Form.Label>
                            <Form.Control

                                type='text'
                                placeholder="Enter description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            >
                            </Form.Control>
                    </Form.Group>


                    <Button type='submit' variant='primary'>
                        Update
                    </Button>

                </Form>
                )}

   

            </FormContainer>         
        </div>
 
  )
}

export default ProductEditScreen