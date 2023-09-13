import { apple, bill, google } from "../assets";
import styles, {layout} from "../style";


const Billing = () => {

  return (

    <section id="product" className={layout.sectionReverse}>

      <div className={layout.sectionImgReverse}>

        <img src={bill} alt="bill" className="w-[100%] h-[100%] relative z-[5]" />
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' /> {/* Gradient background for the image*/}
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/> {/* Gradient background for the image*/}
      
      </div>


      <div className={layout.sectionInfo}>

        <h2 className={styles.heading2}>
          Easily control your 
          <br className="sm:block hidden"/> 
          billing & invoicing.
        </h2>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          The billing section allows you to view and manage your transactions, 
          payments, and invoices. You can also set up recurring payments, 
          pay bills online, and download your statements. 
        </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img src={apple} alt="app store" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" />
          <img src={google} alt="app store" className="w-[128px] h-[42px] object-contain cursor-pointer" />
        </div>

      </div>


    </section>

  )
}

export default Billing