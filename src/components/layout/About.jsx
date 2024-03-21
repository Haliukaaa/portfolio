
import Button from "../ui/Button";

export const About = ({ innerRef }) => {

  return (
    <div className="px-4 md:px-5 py-16 lg:px-20 bg-gray-50 flex flex-col dark:bg-gray-900">
      <div ref={innerRef} className="flex justify-center pb-12">
        <Button buttonText={"About me"}></Button>
      </div>
      <div className="flex flex-col lg:flex-row gap-12 justify-between">
        <div className="flex justify-center">
          <img
            className="w-[280px] h-[360px] object-cover lg:w-[400px] lg:h-[480px] border-8 border-white"
            src="./aboutme.jpg"
            alt="a vector image of a girl with black hair and a green sweater"
          />
        </div>
        <div className="text-container flex flex-col items-start gap-[16px] lg:w-1/2 *:dark:white-text">
          <h1 className="font-bold text-2xl lg:text-3xl dark:white-title">
            Curious about me? Here you have it:
          </h1>
          <p>
            I'm a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
          </p>
          <p>
            I began my journey as a web developer in 2015, and since then, I've
            continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            in my early thirties, 7 years after starting my web development
            journey, I'm building cutting-edge web applications using modern
            technologies such as Next.js, TypeScript, Nestjs, Tailwindcss,
            Supabase and much more.
          </p>
          <p>
            I am very much a progressive thinker and enjoy working on products
            end to end, from ideation all the way to development.
          </p>
          <p>
            When I'm not in full-on developer mode, you can find me hovering
            around on twitter or on indie hacker, witnessing the journey of
            early startups or enjoying some free time. You can follow me on
            Twitter where I share tech-related bites and build in public, or you
            can follow me on GitHub.
          </p>
          <p>Finally, some quick bits about me.</p>
          <div className="flex gap-10">
            <div className="*:dark:white-text">
              <p>B.E. in Computer Engineering</p>
              <p>Full time freelancer</p>
            </div>
            <div className="*:dark:white-text">
              <p>Avid learner</p>
              <p>Aspiring indie hacker</p>
            </div>
          </div>
          <p>
            One last thing, I'm available for freelance work, so feel free to
            reach out and say hello! I promise I don't bite 😉
          </p>
        </div>
      </div>
    </div>
  );
};
