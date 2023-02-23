import { Button, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react';
import { useToast } from '@chakra-ui/react';
const Home = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [wordFile, setWordFile] = useState(null);
  const toast = useToast();
  const handleChange = async (e) => {
    alert('process start')
    const file = e.target.files[0];
    if (!file) {
      toast({
        title: `Please select file`,
        status: 'error',
        isClosable: true,
      })
    }
  }

  return (
    <VStack gap={'3rem'} p={'2rem 0rem'} minH={'100vh'} align={'center'} bgColor={'#f3f0ec'}>
      <VStack>
        <Heading>Pdf to word converter</Heading>
        <Text fontSize={'1.7rem'}>Convert your PDF to WORD documents with incredible accuracy.</Text>
      </VStack>
      <input onChange={handleChange} accept=".pdf" style={{ display: 'none' }} id="files" type={'file'} />
      <label htmlFor="files">
        <Text _hover={{
          bgColor: '#0e1823'
        }} fontSize={'1.7rem'} rounded={'0.2rem'} fontFamily={'math'} p={'0.6rem 2rem'} cursor={'pointer'} color={'white'} bgColor={'#e5322d'}>
          Select pdf file
        </Text>
      </label>
    </VStack>
  )
}

export default Home