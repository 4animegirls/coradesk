import React, { Component } from 'react'
import { Spinner, Layout } from '@ui-kitten/components'
import { Dimensions } from 'react-native'
import { useAppSelector } from '../../../hooks'

const windowWidth = Dimensions.get('window').width;

const Loading = () => {
  const loading = useAppSelector(state => state.loading)


  return (
    <>
    {loading && 
      <Layout style={{ position: 'absolute', width: windowWidth, height: '100%', top: 0, left: 0, backgroundColor: 'rgba(52, 52, 52, 0.3)', alignItems: 'center', justifyContent: 'center', }}>
        <Spinner size='giant' status='warning' />
      </Layout>
    }
    </>)


}


export default Loading
