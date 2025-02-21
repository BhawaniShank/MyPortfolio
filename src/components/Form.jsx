import React from 'react'
import { useForm } from 'react-hook-form'
import Input from './Input'
import TextArea from './TextArea'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Form = ({close}) => {
    const { register, handleSubmit, formState:{errors},reset } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        toast.success('Message sent successfully')
        reset()
        setTimeout(() => {
          close(false)
        }, 1000);

    }

  return (
    <form onSubmit={handleSubmit(onSubmit)} >
      <h1 className='text-2xl text-white pl-4 mt-20'>Contact me</h1>
        <div className='flex flex-col items-center gap-7 mt-4 px-4'>
          <Input 
          type={"email"}
          label={"Email"}
          {...register('email', {required: 'Email is required',pattern: {value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, message: 'Invalid email address'}})}
          errors={errors.email}
          />
          <Input 
          type={"text"}
          label={"Subject"}
          {...register('subject', {required: 'subject is required',minLength: {value: 5, message: 'Subject is too short so, please write more than 5 characters'}})}
          errors={errors.subject}
          />
          <TextArea
          type={"text"}
          label={"Message"}
          row={5}
          {...register('message', {required: 'Message is required',minLength: {value: 10, message: 'Message is too short so, please write more than 10 characters'}})}
          errors={errors.message}
          />
          <motion.button
          whileTap={{scale: 0.95}}
          className='bg-blue-500 cursor-pointer font-semibold text-white px-10 py-2 rounded-md'>Submit</motion.button>
        </div>
    </form>
  )
}

export default Form
