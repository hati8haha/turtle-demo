import Stories from "@/components/stories";
import { query } from "@/config/api";
import { gql } from "@apollo/client";

const userQueryStories = gql`
  query MyQuery {
    activities {
      date
      description
      post_link
      title
    }
  }
`;

const WitnessStories = async () => {
  const { data } = await query({
    query: userQueryStories,
  });

  const storiesData = data.activities.map((activity: any) => ({
    date: activity.date,
    title: activity.title,
    description: activity.description,
    link: activity.post_link,
  }));
  return (
    <section className="w-full min-h-24 bg-ocean-light text-black overflow-x-hidden ">
      <Stories stories={storiesData} />

      <div className="w-screen relative  h-0 z-0">
        <div className="animate-marquee absolute w-full bottom-20 pointer-events-none">
          <span className="text-t-white text-[80px] md:text-[120px] lg:text-[200px] font-bold whitespace-nowrap">
            Witness story Witness story Witness story
          </span>
        </div>
      </div>
    </section>
  );
};

export default WitnessStories;
