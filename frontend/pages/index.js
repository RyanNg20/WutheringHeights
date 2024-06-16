import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Typography from '@mui/material/Typography';
import ContentWrapper from '../components/contentWrapper';
import { useState } from 'react';
import { useTheme } from '@emotion/react';
import Image from 'next/image';
import { Button1 } from '../components/buttons';
import Link from 'next/link'

export default function Home() {
  const theme = useTheme()
  const solutionDescriptions = [
    "Input your character and echo stats",
    "View the damage numbers and echos of your dreams",
    "Obtain said echos with prayers to RNGesus"
  ]
  const solutionImages = [
    <Image src="/emote1.png" height={114} width={114} alt="BaiZhi Emote"/>,
    <Image src="/emote2.png" height={114} width={114} alt="Rover Emote"/>,
    <Image src="/emote3.png" height={114} width={114} alt="Jiyun Emote"/>,
  ]

  return (
    <div>
      {/* Background Image */}
      <div className="w-[100svw] min-h-[calc(100svh*1544/808)] bg-[url('/background.png')] bg-cover bg-[50%_52.33%] absolute top-0 z-[-1]"/>
      <ContentWrapper>
        <main className="h-[100svh] flex flex-col justify-center">
          <Typography variant='h1'>
            <span className="bg-clip-text text-transparent bg-sunset">ELEVATE</span> YOUR DAMAGE TO ITS PEAK
          </Typography>
          <Typography variant='h3' style={{maxWidth: 450, marginBottom: 37, marginTop: 22}}>
            Wuthering Waves echo optimization and damage calculation. Clear Tower of Adversity effortlessly.
          </Typography>
          <Link href="/echos">
            <Button1 label={"Optimize"}/>
          </Link>
        </main>
        <div className="flex flex-col mt-[200px]">
          <Typography variant='h2'>
            HAVE YOU EVER WONDERED . . .
          </Typography>
          <Typography variant='p' style={{paddingLeft: 23, marginTop: 34, borderLeft: `1px solid ${theme.colors.lightGray}`}}>
            Is this echo better then what I currently have equipped?<br />
            Is it worth the materials to upgrade this echo?<br />
            What are the odds that I get crit rate and crit damage on this piece?<br />
            What are the best echos on my character?
          </Typography>
        </div>
        <div className="flex flex-col mt-[133px] mb-[300px]">
          <Typography variant='h2'>
            WELL WE'VE GOT A SOLUTION!
          </Typography>
          <Typography variant='p' style={{paddingLeft: 23, marginTop: 34, borderLeft: `1px solid ${theme.colors.lightGray}`}}>
            Wuthering Heights is a <span className="font-bold">FREE</span> interactive platform that <span className="font-bold">SOLVES</span> these issues in three steps. 
          </Typography>
          <div className="flex flex-row justify-between gap-[16px] mt-[45px] mb-[50px] flex-wrap">
            {solutionDescriptions.map((description, i) => (
              <div key={description} className="flex flex-col bg-gray grow items-center justify-center rounded-md gap-[30px] flex-wrap min-w-[250px] py-[50px]">
                <Typography variant="h3">
                  {i}
                </Typography>
                {i % 2 == 0 && solutionImages[i]}
                <Typography variant="h3" style={{maxWidth: 200, textAlign: 'center'}}>
                  {description}
                </Typography>
                {i % 2 == 1 && solutionImages[i]}
              </div>
            ))}
          </div>
          <Link href="/echos">
            <Button1 label={"Optimize"}/>
          </Link>
        </div>
      </ContentWrapper>
    </div>
  );
}
