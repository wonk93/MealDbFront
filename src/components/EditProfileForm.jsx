// import { useState, useContext, useEffect } from "react"
// import { Form, InputGroup } from 'react-bootstrap'
// import { useNavigate, useParams, } from 'react-router-dom'
// import userService from "../../services/user.service"
// import { AuthContext } from "../../context/auth.context"
// import uploadService from "../../services/upload.service"

// const ProfilePageEdit = () => {

//     const { userName } = useParams()

//     const [ProfilePageEdit, setProfilePageEdit] = useState({})
//     const [loadingImage, setLoadingImage] = useState(false)
//     const { user, setUser } = useContext(AuthContext)
//     const navigate = useNavigate()

//     useEffect(() => {
//         userService
//             .getOneUser(userName)
//             .then(({ data }) => setProfilePageEdit(data))
//             .catch(err => console.log(err))
//     }, [userName])

//     const handleInputChange = e => {
//         const { name, value } = e.target
//         setProfilePageEdit({
//             ...ProfilePageEdit,
//             [name]: value
//         })
//     }

//     const uploadPostImage = e => {
//         setLoadingImage(true)

//         const uploadData = new FormData()
//         uploadData.append('imageURL', e.target.files[0])

//         uploadService
//             .uploadImage(uploadData)
//             .then(({ data }) => {
//                 setLoadingImage(false)
//                 setProfilePageEdit({ ...ProfilePageEdit, imageURL: data.cloudinary_url })
//             })
//             .catch(err => console.log(err))
//     }

//     const handleSubmit = e => {
//         e.preventDefault()

//         userService
//             .editProfileUser(userName, ProfilePageEdit)
//             .then(({ data }) => setUser({ ...user, data }))
//             .catch(err => console.log(err))

//         navigate(`/perfil/${userName}`)
//     }

//     return (
//         <Form onSubmit={handleSubmit}>
//             <InputGroup className="mb-3">
//                 <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
//                 <Form.Control
//                     type='text'
//                     required
//                     placeholder="UserName"
//                     name='username'
//                     value={ProfilePageEdit.userName}
//                     onChange={handleInputChange}
//                     maxLength='10'
//                 />
//             </InputGroup>

//             <Form.Group className='mb-3'>
//                 <Form.Label><strong>userName:</strong></Form.Label>
//                 <Form.Control
//                     type='text'
//                     name='userName'
//                     value={ProfilePageEdit.userName}
//                     onChange={handleInputChange}
//                     placeholder='Introduce tu nombre'
//                     maxLength='40'
//                 />
//             </Form.Group>

//             <Form.Group className='mb-3'>
//                 <Form.Label><strong>nickName:</strong></Form.Label>
//                 <Form.Control
//                     type='text'
//                     name='nickName'
//                     value={ProfilePageEdit.nickName}
//                     onChange={handleInputChange}
//                     placeholder='Introduce tu Nick'
//                     maxLength='40'
//                 />
//             </Form.Group>

//             <Form.Group className='mb-3'>
//                 <Form.Label><strong>email:</strong></Form.Label>
//                 <Form.Control
//                     type='text'
//                     name='email'
//                     value={ProfilePageEdit.email}
//                     onChange={handleInputChange}
//                     placeholder='Introduce tu Nick'
//                     maxLength='40'
//                 />
//             </Form.Group>

//             <Form.Group className='mb-3'>
//                 <Form.Label><strong>Foto de perfil:</strong></Form.Label>
//                 <Form.Control
//                     type='file'
//                     name='imageURL'
//                     onChange={uploadPostImage}
//                 />
//             </Form.Group>

//             <button className="loginButton" type="submit" disabled={loadingImage}>{loadingImage ? 'Espere...' : 'Editar'}</button>
//         </Form>
//     )
// }

// export default ProfilePageEdit