"use client";

export default function About() {
  return (
    <section className="mt-20 z-20 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12">
          <div className="mflex justify-center md:justify-start">
            <img
              src="page/me.jpg"
              className="rounded-lg shadow-xl"
              alt="Attar Rifai"
              width={480}
              height={480}
            />
          </div>

          <div className="md:col-span-1 text-center md:text-left">
            <div className="max-w-lg md:max-w-none">
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-500">
                Attar Rifai
              </h2>

              <p className="mt-4 text-white-700">
                Hello! I’m Attar — a vocational high school student majoring in
                Information Systems, Networks, and Applications (SIJA) at SMK TI
                BAZMA. I have a deep passion for graphic design and photography,
                supported by strong technical skills in web development and
                Internet of Things (IoT).
                <br /> At school, I actively serve in the Student Council's ICT
                Division, where I’ve gained valuable organizational and
                communication experience. I’m frequently entrusted with
                school-related creative and technical projects, including
                leading roles in programming and mentoring younger students.{" "}
                <br /> I’ve built full-featured E-Commerce websites using
                JavaScript, React, PHP, HTML, and CSS. Outside of coding, I love
                expressing creativity through visual storytelling — designing
                posters, social media content, and capturing moments through
                photography. <br />I actively take part in online courses and
                workshops to further develop my technical and creative skills.
                These experiences have helped me understand how technology and
                design can work hand-in-hand to deliver meaningful impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
