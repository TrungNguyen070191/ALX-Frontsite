import Layout from "../../components/Layout/Layout";
import calendarIcon from "../../assets/images/calendar-icon.svg";
import clockIcon from "../../assets/images/clock-icon.svg";
import { useEffect, useState } from "react";
import { getArticle } from "../../services/Article/Article.service";
import { useParams } from "react-router-dom";

const Article = () => {
  const [article, setArticle] = useState();

  const { id } = useParams();

  useEffect(() => {
    fetchArticle();
  }, []);

  async function fetchArticle() {
    const data = await getArticle(id || "").then((res) => res.data);

    if (data?.length > 0) {
      console.log(data);
    }
  }

  return (
    <Layout>
      <div className="font-helvetica-neue flex flex-col gap-8 max-w-[770px] mx-auto">
        <div className="text-sm text-neutral-n40 flex justify-between">
          <span className="text-sm text-thin text-secondary bg-secondary-light px-4 py-1 rounded-full">
            Thiên Nhiên
          </span>
          <div className="flex gap-8">
            <span className="flex items-center">
              <img src={calendarIcon} className="w-4 h-4 inline mr-1" alt="" />
              <time>21/08/2022</time>
            </span>
            <span className="flex items-center">
              <img src={clockIcon} className="w-4 h-4 inline mr-1" alt="" />
              <time>2 phút</time>
            </span>
          </div>
        </div>
        <h1 className="text-secondary text-2xl">This shrimp is awesome</h1>
        <p className="text-sm text-neutral-n40">Thầy Minh Cảnh</p>
        <article className="prose lg:prose-xl max-w-full">
          <h1>Badass</h1>
          <p>
            Mantis shrimps, or stomatopods, are marine crustaceans of the order
            Stomatopoda. Some species have specialised calcified "<em>clubs</em>
            " that can strike with <strong>great power</strong>, while others
            have sharp forelimbs used to capture prey. They branched from other
            members of the class Malacostraca around 340 million years ago.
            Mantis shrimps typically grow to around 10 cm (3.9 in) in length. A
            few can reach up to 38 cm (15 in). The largest mantis shrimp ever
            caught had a length of 46 cm (18 in); it was caught in the Indian
            River near Fort Pierce, Florida, in the United States. A mantis
            shrimp's carapace (the bony, thick shell that covers crustaceans and
            some other species) covers only the rear part of the head and the
            first four segments of the thorax. Varieties range in color from
            shades of brown to vivid colors, with more than 450 species of
            mantis shrimps being known. They are among the most important
            predators in many shallow, tropical and subtropical marine habitats.
            However, despite being common, they are poorly understood, as many
            species spend most of their lives tucked away in burrows and holes.
          </p>
          <p>
            Called "sea locusts" by ancient Assyrians, "prawn killers" in
            Australia, and now sometimes referred to as "thumb
            splitters"—because of the animal's ability to inflict painful gashes
            if handled incautiously—mantis shrimps have powerful claws that are
            used to attack and kill prey by spearing, stunning, or dismembering.
          </p>
          <p>
            Mantis shrimps have, like mantis, ravishing legs. But theirs are so
            resilient that they inspire the military to make the armor of the
            future. Above all, their speed and striking power are the
            responsibility of the superpowers. As the comic book The Oatmeal
            recounts, the squid's ravishing legs move at the speed of a bullet
            fired by a 22 caliber and can strike a prey in 1/3000 of a second,
            with a force of 1,500 Newtons. One tenth of that speed, deployed by
            a human arm, "would be enough to send a baseball into orbit."
          </p>
          <p>
            A speed such as it boils water around ravishing legs and creates a
            shock wave capable of killing a prey missed by the strike.
          </p>
          <p>
            Kept in an aquarium, crustaceans make carnage by dismembering and
            devouring crabs, shrimps, octopuses, snails and shells (whose shells
            they break). They would even be able to break the windows of overly
            fragile aquariums.
          </p>
        </article>
      </div>
    </Layout>
  );
};
export default Article;
