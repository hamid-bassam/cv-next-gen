import { Button } from "../../components/ui/button";
import { cn } from "../../lib/utils";
import babyfoot from "./assets/img/babyfoot.png";
import billard from "./assets/img/billard.png";
import foot from "./assets/img/foot.png";
import guitare from "./assets/img/guitare.png";
import tennis from "./assets/img/tennis.png";
import volley from "./assets/img/volley.png";
import wz from "./assets/img/wz.png";

interface HobbyProps {
  hobby: string;
  src: string;
  cn?: string;
}
export const HOBBIES: HobbyProps[] = [
  {
    src: tennis.src,
    hobby: 'Hobbies.tennis',

  },
  {
    src: volley.src,
    hobby: 'Hobbies.volley',
    cn: 'p-1'

  },
  {
    src: foot.src,
    hobby: 'Hobbies.foot',
    cn: 'p-1.5'

  },
  {
    src: wz.src,
    hobby: 'Hobbies.wz',

  },
  {
    src: babyfoot.src,
    hobby: 'Hobbies.babyfoot',
    cn: 'h-14'

  },
  {
    src: billard.src,
    hobby: 'Hobbies.billard',

  },
  {
    src: guitare.src,
    hobby: 'Hobbies.guitar',
    cn: 'bg-white/80 h-12',


  },
];
export const Hobby = (props: HobbyProps) => {

  return (

    <div className="flex flex-col justify-center items-center ">
      <Button
        variant="outline"

        className="  
    border-none px-0 w-16 h-16  dark:text-black text-white text-xs font-bold  rounded-full
    dark:group-hover/card:shadow-sm dark:group-hover/card:shadow-white group-hover/card:shadow-sm
group-hover/card:shadow-black/20
dark:hover:bg-white/70 hover:bg-muted bg-muted/10"
      >
        {/* TODO nextImage */}
        <img
          src={props.src}
          height={150}
          width={150}
          className={cn("h-16 w-auto object-cover rounded-full", props.cn)}
          alt={props.hobby}
        ></img>
      </Button>
    </div>
  );
};