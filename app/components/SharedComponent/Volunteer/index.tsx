import { Link } from 'react-router'

const Volunteer = () => {
  return (
    <section className='py-28 bg-volunteer-bg bg-no-repeat bg-cover'>
      <div className='container px-4 mx-auto lg:max-w-(--breakpoint-xl) px-4'>
        <div className='text-center'>
          <h2 className='text-30 font-medium text-white mb-6'>
            Start Your Crypto Journey Today
          </h2>
          <p className='text-16 text-white lg:max-w-60% mx-auto mb-6'>
            Join thousands of traders who trust Crypgo for secure cryptocurrency
            trading. Experience lightning-fast execution, competitive fees, and
            bank-level security on our cutting-edge platform.
          </p>
          <div className='flex justify-center '>
            <Link
              to='/'
              className='text-white bg-linear-to-r from-error to-warning px-7 py-5 hover:from-transparent hover:to-transparent border border-transparent hover:border-error hover:text-error rounded-sm'>
              Start Trading
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Volunteer
