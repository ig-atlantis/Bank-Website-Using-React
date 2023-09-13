import { card } from '../assets';
import styles, {layout } from '../style';
import Button from './Button'

const CardDeal= () => {

  return (

    <section className={layout.section}>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal
          <br className='sm:block hidden' />
          in few easy steps.
        </h2>

        <p className={`${styles.paragraph} max-w-[480px] mt-5`}>
          The billing section allows you to view and manage your transactions, 
          payments, and invoices. You can also set up recurring payments, 
          pay bills online, and download your statements.
        </p>
        <Button styles="mt-10"/>
      </div>


      <div className={layout.sectionImg}>
        <img src={card} alt='card' className='w-[100%] h-[100%]' />
      </div>


    </section>

  )
}

export default CardDeal