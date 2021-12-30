import { gql, useMutation, useQuery } from '@apollo/client';
import React from 'react';
import { HeartIcon, DotsHorizontalIcon, ChatIcon, PaperAirplaneIcon, BookmarkIcon, EmojiHappyIcon }
  from '@heroicons/react/outline'
import { HeartIcon as HeartIconSolid }
  from '@heroicons/react/solid'
import { feed } from '../__generated__/feed';
import { like, likeVariables } from '../__generated__/like';
import Link from 'next/link';
import Image from 'next/image'
import { useForm } from 'react-hook-form';
import Loading from './Loading';


const FEED_QUERY = gql`
  query feed {
    feed {
      id
      caption
      file
      numberLikes
      isMine
      isLiked
      user {
        username
        isMe
      }
    }
  }
`

const LIKE_MUTATION = gql`
  mutation like($input: LikePhotoInput!) {
    likePhoto(input: $input) {
      ok
      error
    }
  }
`

interface IFeed {
  id: string
}
interface ResultCache {
  isLiked: boolean
  numberLikes: number
}
interface ICommentProps {
  title: string
}
const r = ['isLiked', 'numberLikes']
const Feed: React.FC = () => {
  const { data, loading, error } = useQuery<feed>(FEED_QUERY)
  const { getValues, handleSubmit, register, formState: { isValid, errors } }
    = useForm<ICommentProps>({
      mode: 'onTouched'
    })
  const [likePhoto] = useMutation<like, likeVariables>(LIKE_MUTATION)

  const togglePhoto = async ({ id }: IFeed) => {
    await likePhoto({
      variables: {
        input: {
          id
        }
      },
      update(cache, result) {
        const ok = result.data?.likePhoto.ok
        if (ok) {
          const fragmentId = `PhotoModel:${id}`
          const fragment = gql`
            fragment Pieces on PhotoModel {
              isLiked
              numberLikes
            }
          `
          const result = cache.readFragment<ResultCache>({
            id: fragmentId,
            fragment,
          })
          // @ts-ignore
          if ("isLiked" in result && "numberLikes" in result) {
            const { isLiked, numberLikes } = result
            cache.writeFragment({
              id: fragmentId,
              fragment,
              data: {
                isLiked: !isLiked,
                numberLikes: isLiked ? numberLikes - 1 : numberLikes + 1
              }
            })
          }
        }
      }
    })
    // await likePhoto({
    //   variables: {
    //     input: {
    //       id
    //     }
    //   },
    //   refetchQueries: [{ query: FEED_QUERY }]
    // })
  }
  if (loading) return <Loading />
  return (
    <>
      {data?.feed.map(feed => (
        <section key={feed.id} className='bg-white max-w-4xl mx-auto my-7 border rounded-sm'>
          <div className="flex items-center p-5">
            <h1 className='font-semibold flex-1'>
              <Link href={`/${feed.user.username}`}>{feed.user.username}</Link></h1>
            <DotsHorizontalIcon className='h-5' />
          </div>
          <div className='w-full relative border-t border-b'>
            <Image className='border-t border-b' objectFit='cover'
              width={1080}
              height={800}
              layout='responsive' src={feed.file} alt={`${feed.caption}`} />
          </div>
          {/* <img src={feed.file} className='w-full object-cover border-t border-b' /> */}
          <div className='p-4 space-y-4'>
            <div className="flex justify-between">
              <div className='flex space-x-4'>
                <span onClick={() => togglePhoto({ id: feed.id })}>{feed.isLiked ?
                  <HeartIconSolid className='btn text-red-600' />
                  : <HeartIcon className='btn' />}</span>
                <ChatIcon className='btn' />
                <PaperAirplaneIcon className='btn' />
              </div>
              <BookmarkIcon className='btn' />
            </div>
            <h3 className=''>{feed.numberLikes === 1 ?
              `1 like` : `${feed.numberLikes} likes`}</h3>
            <p className='truncate'>
              <span className='font-bold pr-2'> <Link href='/[username]'
                as={`/${feed.user.username}`}>{feed.user.username}</Link></span>
              {feed.caption}
            </p>
            <form className='flex items-center space-x-2'>
              <EmojiHappyIcon className='btn' />
              <input {...register('title', { required: true, minLength: '1' })} className='focus:ring-0 outline-none border-none flex-1'
                type="text" placeholder='Adicione um comentario' />
              <button disabled={isValid ? false : true}
                className={`${isValid ? 'text-blue-400 hover:opacity-70' :
                  'text-gray-300 pointer-events-none'}`}>Comentar</button>

            </form>
          </div>
        </section>
      )
      )}
    </>
  )
}

export default Feed;