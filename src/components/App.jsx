import { About } from './modules/About/About';
import { Cases } from './modules/Cases/Cases';
import { Electricity } from './modules/Electricity/Electricity';
import { Header } from './modules/Header/Header';
import { Hero } from './modules/Hero/Hero';

export const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Electricity />
      <Cases />
    </>
  );
};
