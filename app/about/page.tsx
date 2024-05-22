import Image from "next/image";
import React from "react";

function AboutPage() {
  return (
    <div>
      <div>
        <h1 className="font-extrabold text-xl tracking-tighter md:text-3xl">
          PERSONAL PROFILE
        </h1>

        <p className=" md:text-base">
          I am Victory Kwashigah Ahiaku,{" "}
          <span className="font-bold"> a Ghanaian blogger</span>, entrepreneur,
          and language enthusiast. As the{" "}
          <span className="underline font-bold"> CEO</span> of Trendy Bell Hub
          under Avenue Hub Media, I lead a media company that specializes in
          content creation, event organization, and publicity services.
        </p>

        <p className="mt-3">
          {" "}
          Born and raised in Keta, Volta Region, Ghana, I discovered my passion
          for writing during my final year at the University of Education,
          Winneba (Ajumako Campus, Central Region). Despite my academic
          pursuits, I remain humble and dedicated to my craft.
        </p>
      </div>

      <div className="flex justify-center mt-3 ">
        <div className="mt-2 items-center rounded-md  ring-8 w-fit">
          <Image
            src={"/profile2.jpg"}
            width={300}
            height={100}
            alt="victory"
            className="object-fit rounded-md "
          />
        </div>
      </div>
      <p className="mt-3 text-center text-xs underline italic text-gray-500 ">
        {" "}
        Photo credits: Inpix Media
      </p>
      <div>
        <h1 className="mt-6 font-extrabold text-xl tracking-tighter md:text-3xl">
          LINGUISTICS PROFESSIONAL
        </h1>

        <p className="mt-1">
          I am a highly motivated and detail-oriented linguistics professional
          with a robust foundation in linguistic theory, research, language
          acquisition, and language teaching methodologies. Holding a {""} {""}
          <span className="font-bold text-blue-300 underline">
            Bachelor of Arts in Education (Linguistic Languages) from the
            University of Education, Winneba (Central Region)
          </span>
          , I have a deep understanding of phonetics, syntax, semantics,
          sociolinguistics, and literature. My skill set includes:
        </p>

        <div className="mt-2">
          <li>Language analysis and data interpretation</li>
          <li>Excellent communication and writing skills</li>
          <li>Proficiency in language analysis software (e.g., Praat, R)</li>
          <li>Strong problem-solving and analytical abilities</li>
          <li>Effective teamwork capabilities</li>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
