import Image from "next/image";
import React from "react";

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center py-12 px-4 sm:px-8 lg:px-0">
      <div className="w-full max-w-2xl flex flex-col gap-12">
        {/* Header/Profile */}
        <div className="flex flex-col items-center gap-4">
          <div className="relative w-32 h-32 md:w-40 md:h-40">
            {/* Subtle gradient card behind image */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 via-background to-purple-400/20 dark:from-primary/20 dark:to-purple-900/20 -rotate-6 z-0" />
            <div className="relative w-full h-full rounded-xl overflow-hidden z-10 shadow-xl">
              <Image
                src={"/profile2.jpg"}
                fill
                alt="victory"
                className="object-cover rounded-xl"
                priority
              />
            </div>
          </div>
          <h1 className="font-extrabold text-3xl md:text-4xl tracking-tight text-center mt-2">
            Victory Kwashigah Ahiaku
          </h1>
          <p className="text-muted-foreground text-center text-sm italic">
            Photo credits: Inpix Media
          </p>
        </div>

        {/* Personal Profile Section */}
        <section className="space-y-4">
          <h2 className="font-bold text-xl md:text-2xl tracking-tight border-b-2 border-primary w-fit pb-1 mb-2">
            Personal Profile
          </h2>
          <p className="text-base md:text-lg leading-relaxed">
            I am{" "}
            <span className="font-bold text-primary">a Ghanaian blogger</span>,
            entrepreneur, and language enthusiast. As the
            <span className="underline font-bold"> CEO</span> of Trendy Bell Hub
            under Avenue Hub Media, I lead a media company that specializes in
            content creation, event organization, and publicity services.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            Born and raised in Keta, Volta Region, Ghana, I discovered my
            passion for writing during my final year at the University of
            Education, Winneba (Ajumako Campus, Central Region). Despite my
            academic pursuits, I remain humble and dedicated to my craft.
          </p>
        </section>

        {/* Linguistics Section */}
        <section className="space-y-4">
          <h2 className="font-bold text-xl md:text-2xl tracking-tight border-b-2 border-primary w-fit pb-1 mb-2">
            Linguistics Professional
          </h2>
          <p className="text-base md:text-lg leading-relaxed">
            I am a highly motivated and detail-oriented linguistics professional
            with a robust foundation in linguistic theory, research, language
            acquisition, and language teaching methodologies. Holding a{" "}
            <span className="font-bold text-primary underline">
              Bachelor of Arts in Education (Linguistic Languages) from the
              University of Education, Winneba (Central Region)
            </span>
            , I have a deep understanding of phonetics, syntax, semantics,
            sociolinguistics, and literature. My skill set includes:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-base md:text-lg">
            <li>Language analysis and data interpretation</li>
            <li>Excellent communication and writing skills</li>
            <li>Proficiency in language analysis software (e.g., Praat, R)</li>
            <li>Strong problem-solving and analytical abilities</li>
            <li>Effective teamwork capabilities</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;
