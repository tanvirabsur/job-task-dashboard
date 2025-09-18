"use client"
import SingelUser from '@/components/SingelUser'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Userpage() {
  const [users, setUsers] = useState<string[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
        setUsers(data)

      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false)
      }

    }

    fetchData()
  }, [])
  if (loading) return <p>loading</p>
  console.log(users);

  return (

    <SingelUser />

  )
}   
