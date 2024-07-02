import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'

const SkeletonCard = () => {
  return (
    <>
        <Card size={'md'} borderRadius={10}>
            <Skeleton width={{base: 300, lg: 350}} height={{base: 150, lg: 250}}  ></Skeleton>
            <CardBody>
                <SkeletonText></SkeletonText>
            </CardBody>
        </Card>
    </>
  )
}

export default SkeletonCard