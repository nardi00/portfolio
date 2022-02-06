import React from 'react';
import { useRouter } from 'next/router';

export default function ProjectItem() {
  const router = useRouter()
  const {id} = router.query

  return <div>project item{id}</div>; 
}
