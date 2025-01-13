import heroImage from '../assets/hero/heroImage.png';

const Hero = () => {
  return (
    <section className="relative flex items-center justify-between mt-12 z-[1] mx-[10%] max-830:flex-col-reverse">
      <div className="flex flex-col items-start text-text z-[1] max-830:items-center">
        <h1 className="text-[72px] font-[900] mb-8 font-outfit bg-clip-text">
          Hi, I'm Adnan
        </h1>
        <p className="text-[30px] font-outfit mb-[52px]">
          I'm a full-stack developer with 5 years of experience using React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <a
          className="bg-primary text-text rounded-full text-[30px] font-semibold px-6 py-4 shadow-md hover:shadow-lg transition-shadow no-underline"
          href=""
        >
          Contact Me
        </a>
      </div>
      <img
        src={heroImage}
        alt="Hero"
        className="w-1/2 z-[1] animate-floating"
      />
      <div className="absolute w-[50vw] h-[50vw] min-w-[350px] top-[-128px] left-[-10vw] rounded-full bg-secondary/70 blur-[100px] z-0" />
      <div className="absolute w-[70vw] h-[50vw] min-w-[250px] top-[246px] right-[-25vw] rounded-full bg-secondary/70 blur-[100px] z-0" />
    </section>
  );
};

export default Hero;
