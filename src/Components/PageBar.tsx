import { Button, Card, CardBody, HStack, Text } from '@chakra-ui/react'
import React from 'react'

interface Props{
    onClick: (page: number)=>void;
}

const PageBar = (props: Props) => {

    let pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <>
        <HStack mt={'3'} mb={'3'}>
            {pages.map(obj =>(
                <Button onClick={()=>(props.onClick(obj))} size={'sm'}  key={obj}>{obj}</Button>
            ))}
        </HStack>
    </>
  )
}

export default PageBar