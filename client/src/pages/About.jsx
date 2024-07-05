export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About CaseBlog
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
              Welcome to CaseBlog! A website where you can type your thoughts
              and share your stories all around the world. This website was created 
              for avid readers and witty writers.
            </p>

            <p>
              On this blog, you&apos;ll find weekly articles on various topics
              and different genres.So be sure to check back often for new content!
            </p>

            <p>
              We encourage you to leave comments on our posts and engage with
              other readers. You can like other people&apos;s comments and reply to
              them as well. We believe that a community of learners can help
              each other grow and improve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}