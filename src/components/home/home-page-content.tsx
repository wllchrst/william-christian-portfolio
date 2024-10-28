function HomePageContent() {
  const text =
    " I’m currently working full-time as a Full Stack Engineer in Research\n and Development while studying at Bina Nusantara University. I’m\n really enthusiastic about learning and working in the software world.\n I enjoy collaborating with others, as I believe teamwork sparks the\n best ideas. My passion lies in building innovative solutions that make\n a difference, and I love tackling challenges alongside my peers.\n ";
  return (
    <div className="flex items-center justify-center gap-20">
      <div className="flex flex-col gap-2">
        <p className="text-xl">Hi my name is</p>
        <p className="font-bold text-4xl">William Christian</p>
        <p className="tracking-wider whitespace-pre-line leading-5">{text}</p>
      </div>
      <div className="w-[300px] ">
        <img src="../../../public/personal-image.png" className="rounded-md" />
      </div>
    </div>
  );
}

export default HomePageContent;
