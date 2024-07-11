
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger
} from "@/components/ui/select";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { buttonVariants } from "../../components/ui/button";
import { cn } from "../../lib/utils";
import gbFlag from "./assets/img/english_flag.png";
import frFlag from "./assets/img/french_flag.png";




const SelectLang = () => {


  interface Option {
    country: string;
    code: string;
    flag: StaticImageData;
  }
  const t = useTranslations("Home.SelectLanguage");
  const router = useRouter();
  const pathname = usePathname();

  const [isOptionsExpanded, setIsOptionsExpanded] = useState(false);
  const params = useParams<{ locale: string }>()

  const options: Option[] = [
    { country: t("english"), code: "en", flag: gbFlag },
    { country: t("french"), code: "fr", flag: frFlag }
  ];


  const setOption = (option: Option) => {
    setIsOptionsExpanded(false);
    router.push(`/${option.code}`);
  };


  return (
    <Select value={params.locale}>
      <SelectTrigger className={cn(buttonVariants({ variant: "outline" }), "w-16 max-md:h-4 h-8")} >
        <Image
          src={options.find((option) => option.code === params.locale)?.flag || gbFlag}
          width={"20"}
          height={"20"}
          alt="logo"
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map((option, index) => (

            <SelectItem

              key={index}
              onMouseDown={(e) => {
                e.preventDefault();
                setOption(option);
              }}
              onTouchStart={(e) => {
                setOption(option);
              }
              }

              onClick={() => { setIsOptionsExpanded(false); setOption(option); }}
              value={option.code}
            >
              <div className="flex items-center gap-4">
                <Image
                  src={option.flag}
                  width={"20"}
                  height={"20"}
                  alt="logo"
                />
                <span>
                  {option.country} </span>
              </div>

            </SelectItem>
          ))

          }

        </SelectGroup>
      </SelectContent>
    </Select >
  )
}

export default SelectLang;