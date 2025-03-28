
'use client'
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Button } from '../../components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../../components/ui/dialog';
import ProfilImageComponent from './ProfilImageComponent';
import cv from './assets/img/cv miniature.png';
// import { ProfilImageComponent } from './ProfilImageComponent';

export const ProfilImageDialogTrigger = () => {
  const t = useTranslations('Home.Hero');

  return (
    <Dialog >
      <DialogTrigger asChild>

        <ProfilImageComponent onClick={() => { }} />

      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{t('Dialog.title')}</DialogTitle>
          <DialogDescription>
            {t('Dialog.description')}
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center items-center">
          <Image
            src={cv}
            alt="hamid BASSAM"
            className="w-32 h-48  object-cover shadow-lg border border-gray-300 hover:shadow-xl transition-transform duration-200 ease-in-out"
          />
        </div>

        <DialogFooter>

          <Button asChild>

            <a
              href="/CV_Hamid_BASSAM.pdf"
              download="CV_Hamid_BASSAM.pdf"
              className="ml-2 "
            >
              {t("Dialog.button")}
            </a>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};