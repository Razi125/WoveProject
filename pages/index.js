import styles from '../styles/Home.module.css'
import Header from '../component/Header/Header';
import MainContainer from '../component/mainContainer/MainContainer';
import WorkFlows from '../component/WorkFlow/WorkFlows';
import Footer from '../component/Footer/Footer';
import Loop from '../component/Loop/Loop';
import WoveBf from '../component/Wove/WoveBf';
import WoveAfter from '../component/Wove/WoveAfter';
import WoveSingle from '../component/Wove/WoveSingle';
import TabGroup from '../component/TabTest/TabGroup';
// import TabTest from '../component/TabTest/TabTest';
export default function Home() {
  return (
    <div className={`${styles.container} main`}>
      <Header />
      <br />
      <MainContainer />
      <br />
      <TabGroup />
      <br />
      <WorkFlows />
      <br />
      <WoveBf />
      <br />
      <WoveAfter />
      <br />
      <WoveSingle />
      <Loop />
      <br />
      <Footer />
    </div>
  )
}
