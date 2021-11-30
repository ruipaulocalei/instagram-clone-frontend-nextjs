import React from 'react';
import { useRouter } from 'next/router'
import { ApolloCache, FetchResult, gql, useApolloClient, useMutation, useQuery } from '@apollo/client';
import { seeProfile, seeProfileVariables } from '../__generated__/seeProfile';
import { Header } from '../components/Header';
import Image from 'next/image'
import { HeartIcon as HeartIconSolid }
  from '@heroicons/react/solid'
import ButtonFollow from '../components/ButtonFollow';
import Loading from '../components/Loading';
import { unfollowUser, unfollowUserVariables } from '../__generated__/unfollowUser';
import { followUser, followUserVariables } from '../__generated__/followUser';

const SEE_PROFILE_QUERY = gql`
  query seeProfile($input: String!) {
    seeProfile(input: $input) {
      ok
      error
      profile {
        id
        name
        username
        bio
        isMe
        totalFollowing
        totalFollowers
        totalPublish
        isFollowing
        photos {
          id
          caption
          file
          numberLikes
        }
      }
    }
  }
`

const FOLLOW_USER_MUTATION = gql`
  mutation followUser($input: FollowUserInput!) {
    followUser(input: $input) {
      ok
      error
    }
  }
`
const UNFOLLOW_USER_MUTATION = gql`
  mutation unfollowUser($input: FollowUserInput!) {
    unfollowUser(input: $input) {
      ok
      error
    }
  }
`
const Profile: React.FC = () => {
  const { query: { username } } = useRouter()
  const { data, loading, error } = useQuery<seeProfile, seeProfileVariables>(SEE_PROFILE_QUERY, {
    variables: {
      input: `${username}`
    }
  })

  const client = useApolloClient()
  const onCompleted = (data: followUser) => {
    const { followUser: { ok } } = data
    if (!ok) {
      return
    }
    const { cache } = client
    cache.modify({
      id: `UserModel:${username}`,
      fields: {
        isFollowing(prev) {
          return true
        }
      }
    })
  }

  const [followUser] = useMutation<followUser, followUserVariables>(FOLLOW_USER_MUTATION, {
    variables: {
      input: {
        username: `${username}`
      }
    },
    onCompleted
  })

  const [unfollowUser] = useMutation<unfollowUser, unfollowUserVariables>(UNFOLLOW_USER_MUTATION, {
    variables: {
      input: {
        username: `${username}`
      }
    },
    update(cache, result) {
      const { data: dataResult } = result
      if (dataResult?.unfollowUser.ok) {
        console.log(dataResult?.unfollowUser.ok)
        cache.modify({
          id: `UserModel:${username}`,
          fields: {
            isFollowing(prev) {
              return false
            }
          }
        })
      }
    }
  })
  if (loading) return <Loading />
  return (
    <>
      <Header />
      <section className='max-w-4xl mx-auto my-7'>
        {/* <h1>Profile - {data?.seeProfile.profile?.username}</h1> */}
        <div className='flex space-x-28'>
          <div className="h-40 w-40 hidden md:inline rounded-full bg-gray-200 ml-16"></div>
          <div className='space-y-3 flex-1'>
            <div className='flex items-center space-x-8'>
              <h4 className='text-2xl'>{data?.seeProfile.profile?.username}</h4>
              {data?.seeProfile.profile?.isMe ?
                <span className='p-2 border'>Editar perfil</span> :
                data?.seeProfile.profile?.isFollowing ?
                  <ButtonFollow onClick={unfollowUser}>Não Seguir</ButtonFollow>
                  : <ButtonFollow onClick={followUser}>Seguir</ButtonFollow>}
            </div>
            <div className='flex space-x-10'>
              <h4>{data?.seeProfile.profile?.totalPublish === 1 ?
                <div className='space-x-1'><span className='font-bold'>{data?.seeProfile.profile?.totalPublish}</span>
                  <span>publicação</span>
                </div>
                : <div className='space-x-1'><span className='font-bold'>{data?.seeProfile.profile?.totalPublish}</span>
                  <span>publicações</span></div>}</h4>

              <h4>{data?.seeProfile.profile?.totalFollowers === 1 ?
                <div className='space-x-1'><span className='font-bold'>{data?.seeProfile.profile?.totalFollowers}</span>
                  <span>seguidor</span>
                </div>
                : <div className='space-x-1'><span className='font-bold'>{data?.seeProfile.profile?.totalFollowers}</span>
                  <span>seguidores</span></div>}</h4>
              <h4 className='space-x-1'><span>A seguir</span>
                <span className='font-bold'>{data?.seeProfile.profile?.totalFollowing}</span></h4>
            </div>
            <div>
              <span className='font-semibold text-lg'>{data?.seeProfile.profile?.name}</span>
              <p>{data?.seeProfile.profile?.bio && data?.seeProfile.profile?.bio}</p>
            </div>
          </div>
        </div>

        <div className='grid md:grid-cols-2  lg:grid-cols-3 mt-7 gap-7'>
          {data?.seeProfile.profile?.photos?.map(photo => (
            <div key={photo.id} className='h-96 relative'>
              <Image objectFit='cover' layout='fill' src={photo.file} alt={`${photo.caption}`} />
              <div className='absolute w-full bg-black h-full duration-500 ease-in-out
              hover:opacity-50 opacity-0 transform transition-all'>
                <div className='text-white w-full h-full flex space-x-10
                items-center justify-center font-bold'>
                  <div className='flex items-center space-x-2'>
                    <HeartIconSolid className='btn' />
                    <span>{photo.numberLikes}</span>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <HeartIconSolid className='btn' />
                    <span>{photo.numberLikes}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Profile;