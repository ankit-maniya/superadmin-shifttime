import Link from 'next/link'

export default function Subscription({ plans, activePlan, handlePlanSelection }) {

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <TitleBar />
      <div className="grid max-w-md gap-10 row-gap-5 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto" data-aos="zoom-in-left" data-aos-delay="200">
        <Plans plans={plans} activePlan={activePlan} handlePlanSelection={handlePlanSelection}/>
      </div>
    </div >
  )
}

const Plans = ({ plans, activePlan, handlePlanSelection }) => {

  return plans.map((plan, index) => {

    return <PlanCard idx={index} key={index} plan={plan} activePlan={activePlan} handlePlanSelection={handlePlanSelection}/>
  })
}

const PlanCard = ({ plan, activePlan,  handlePlanSelection}) => {
  const formatedprice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'CAD', currencyDisplay: 'symbol' }).format(plan?.default_price?.unit_amount / 100).replace('CA', '');

  return (
    <div className={`relative flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow ${activePlan == plan.id ? "border-green-550" : ""}`} data-aos="zoom-in" data-aos-delay="200">
      {activePlan == plan.id && <div className="absolute inset-x-0 top-0 flex justify-center -mt-3">
        <div className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-white uppercase rounded bg-green-550">
          Active Plan
        </div>
      </div>
      }
      <div className="text-center">
        <div className="text-lg font-semibold">{plan.name}</div>
        <div className="flex items-center justify-center mt-2">
          <div className="mr-1 text-5xl font-bold">{plan.check ?? formatedprice}</div>
          <div className="text-gray-700">/ mo</div>
        </div>
      </div>
      <div className="mt-2 space-y-3">
        <p className="mb-2 font-bold tracking-wide">Features</p>
        <ul className="space-y-2">
          {plan.features.map((feature, index) => {
            return <li key={index} className="flex items-center">
              <div className="mr-2">
                <CheckIcon />
              </div>
              <p className="font-medium text-gray-800">
                {feature?.name || ""}
              </p>
            </li>
          })}
        </ul>
      </div>

      <div>
        <Link
          onClick={() => handlePlanSelection(plan)}
          href="#"
          className={`inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-m  focus:shadow-outline focus:outline-none ${plan?.metadata?.class} ${activePlan == plan.id ? 'pointer-events-none' : ''}`}
        >
          {plan?.metadata?.buttonText}
        </Link>
        <p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
          {plan.description}
        </p>
      </div>
    </div>
  )
}

function CheckIcon(props) {
  return (
    <svg
      className="w-4 h-4 text-green-550"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokelidth="2"
    >
      <polyline
        fill="none"
        stroke="currentColor"
        points="6,12 10,16 18,8"
      />
      <circle
        cx="12"
        cy="12"
        fill="none"
        r="11"
        stroke="currentColor"
      />
    </svg>
  )
}

const TitleBar = ({ title }) => {
  return <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto" data-aos="zoom-y-out">
      <span className="relative inline-block">
        <svg
          viewBox="0 0 52 24"
          fill="currentColor"
          className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
        >
          <defs>
            <pattern
              id="7e5e8ff8-1960-4094-a63a-2a0c0f922d69"
              x="0"
              y="0"
              width=".135"
              height=".30"
            >
              <circle cx="1" cy="1" r=".7" />
            </pattern>
          </defs>
          <rect
            fill="url(#7e5e8ff8-1960-4094-a63a-2a0c0f922d69)"
            width="52"
            height="24"
          />
        </svg>
        <span className="relative" >Current</span>
      </span>{' '}
      Plan Information.
    </h2>
  </div>
}