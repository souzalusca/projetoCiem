// App.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";

type SectionProps = {
  image?: string;
  title: string;
  text: string;
  reverse?: boolean;
};

const Section: React.FC<SectionProps> = ({ image, title, text, reverse }) => (
  <motion.section
    className={`flex bg-amber-50 flex-col px-4 md:px-16 md:flex-row ${
      reverse ? "md:flex-row-reverse" : ""
    } items-center py-8 gap-6`}
    initial={{ x: reverse ? 800 : -200, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <motion.img
      src={image}
      alt=""
      className="w-full md:w-[40%] rounded-lg shadow-lg"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 100 }}
    />
    <div className="w-full md:w-1/2">
      <h2 className="text-2xl font-bold text-blue-900 mb-4">{title}</h2>
      <p className="text-gray-600 mb-6">{text}</p>
      <a href="#" className="text-blue-950 hover:underline inline-block">
        <motion.button
          type="button"
          className="bg-yellow-400 p-3 font-bold text-blue-900 w-[150px] rounded"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Saiba mais
        </motion.button>
      </a>
    </div>
  </motion.section>
);
function App() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans">
      {/* Header */}
      <header
        className={`fixed top-0 z-50 w-full p-4 md:p-8 transition-all duration-300 ${
          scrolled
            ? "bg-white text-blue-900 shadow-md"
            : "bg-blue-950 text-white"
        }`}
      >
        <div className="container px-4 md:px-24 flex justify-between items-center">
          <h2 className="text-[1.2rem] md:text-[1.5rem] font-bold">
            Colégio CIEM
          </h2>
          <nav className="flex flex-wrap gap-4 md:gap-6 text-sm md:text-base">
            <a href="#menu" className="hover:font-bold">
              Menu
            </a>
            <a href="#contato" className="hover:font-bold">
              Contato
            </a>
            <a href="#login" className="hover:font-bold">
              Login
            </a>
            <a href="#inscricao" className="hover:font-bold">
              Inscreva-se
            </a>
          </nav>
        </div>
      </header>

      {/* Bloco principal com imagem */}
      <main className="relative p-0 w-full bg-gray-100 flex justify-center">
        <div className="w-full ">
          <img
            src="https://wordpress-cms-gc-prod-assets.quero.space/uploads/2018/10/licenciatura-plena.jpg"
            alt="Imagem principal"
            className="w-full h-[400px] md:h-[600px] lg:h-[900px] object-cover"
          />
        </div>

        {/* Overlay de gradiente */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-gray-600/20"></div>

        <div className="absolute top-[50%]  md:top-[70%] left-[30%] w-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white max-w-[90%] md:max-w-[600px] px-4 text-center md:text-left">
          <h1 className="md:text-4xl text-2xl  font-bold mb-4">
            Seja bem-vindo ao Colégio CIEM
          </h1>
          <p className="md:text-lg text-sm mb-6">
            O Colégio CIEM oferece uma experiência educacional inovadora e
            personalizada para alunos de todas as idades.
          </p>
          <button className="mt-15 bg-yellow-500 text-blue-900 font-bold md:py-2 md:px-4 rounded">
            <a
              href="#inscricao"
              className="font-bold py-2 px-2 rounded text-[0.8rem] md:text-[1rem] inline-block"
            >
              QUERO CONHECER MAIS!
            </a>
          </button>
        </div>
      </main>

      {/* Seções animadas */}
      <Section
        image="https://wallpapers.com/images/hd/school-pictures-om6ilb50qdoue5uh.jpg"
        title="Metodologia de Ensino"
        text="Utilizamos uma abordagem inovadora e personalizada para cada aluno."
      />
      <Section
        image="https://noticiasrn.com.br/wp-content/uploads/2025/05/Design-sem-nome-2025-05-23T133245.006.png"
        title="Infraestrutura Moderna"
        text="Nossa escola possui uma infraestrutura moderna e confortavel. 
        Temos uma biblioteca para que os alunos possam estudar em paz, e uma sala de aulas confortavel para que os alunos possam estudar em paz.
        Além disso, temos um espaco para que os alunos possam estudar em paz.Nossa escola possui uma infraestrutura moderna e confortavel. 
        Temos uma biblioteca para que os alunos possam estudar em paz, e uma sala de aulas confortavel para que os alunos possam estudar em paz.
        Além disso, temos um espaco para que os alunos possam estudar em paz.
        "
        reverse
      />
      <Section
        image="https://wallpapers.com/images/hd/school-pictures-om6ilb50qdoue5uh.jpg"
        title="Infraestrutura Moderna"
        text="Nossa escola possui uma infraestrutura moderna e confortavel. 
        Temos uma biblioteca para que os alunos possam estudar em paz, e uma sala de aulas confortavel para que os alunos possam estudar em paz.
        Além disso, temos um espaco para que os alunos possam estudar em paz.Nossa escola possui uma infraestrutura moderna e confortavel. 
        Temos uma biblioteca para que os alunos possam estudar em paz, e uma sala de aulas confortavel para que os alunos possam estudar em paz.
        Além disso, temos um espaco para que os alunos possam estudar em paz.
        "
      />
      <Section
        image="https://noticiasrn.com.br/wp-content/uploads/2025/05/Design-sem-nome-2025-05-23T133245.006.png"
        title="Infraestrutura Moderna"
        text="Nossa escola possui uma infraestrutura moderna e confortavel. 
        Temos uma biblioteca para que os alunos possam estudar em paz, e uma sala de aulas confortavel para que os alunos possam estudar em paz.
        Além disso, temos um espaco para que os alunos possam estudar em paz.Nossa escola possui uma infraestrutura moderna e confortavel. 
        Temos uma biblioteca para que os alunos possam estudar em paz, e uma sala de aulas confortavel para que os alunos possam estudar em paz.
        Além disso, temos um espaco para que os alunos possam estudar em paz.
        "
        reverse
      />
      <div className="h-32 w-full bg-gradient-to-t from-blue-300   to-amber-50" />

      <motion.div
        className="bg-gray-100 relative w-full h-auto"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="relative p-0 w-full bg-gray-100 flex justify-center">
          <motion.img
            src="https://interacademybrazil.com.br/wp-content/uploads/2022/08/img-as-escolinhas-de-futebol-sao-espacos-privilegiados-para-a-pratica-do-esporte.jpg"
            alt="Imagem principal"
            className="w-full h-[900px] object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/50 to-[#002CA6]" />
          <div className="absolute top-[70%] left-[20%] transform -translate-x-1/2 -translate-y-1/2 text-white max-w-[600px] px-4">
            <h1 className="text-4xl font-bold mb-4">
              Seja bem-vindo ao Colégio CIEM
            </h1>
            <p className="text-lg mb-6">
              O Colégio CIEM oferece uma experiência educacional inovadora e
              personalizada para alunos de todas as idades.
            </p>
            <motion.button
              className="bg-yellow-500 mt-15 hover:bg-yellow-500 font-bold py-2 px-4 rounded"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <a
                href="#inscricao"
                className="text-blue-900 font-bold py-2 px-4 rounded inline-block"
              >
                QUERO CONHECER MAIS!
              </a>
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.footer className="bg-white w-full flex flex-col md:flex-row justify-between p-6 text-center text-blue-900">
        <div>© 2025 Colégio Exemplo. Todos os direitos reservados.</div>
        <div>
          Desenvolvido por <strong>EMLU COMPANY.</strong>
        </div>
      </motion.footer>
    </div>
  );
}

export default App;
