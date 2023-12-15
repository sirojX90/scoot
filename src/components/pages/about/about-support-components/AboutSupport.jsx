import Accordion from './accordion/Accordion';

export const AboutSupport = () => {
  const works = [
    { 
      title: 'How do I download the app?', 
      content: `
        To download the Scoot app, you can search “Scoot” in both the App and Google Play 
        stores. An even simpler way to do it would be to click the relevant link at the bottom of 
        this page and you’ll be re-directed to the correct page.
      `
    },
    { 
      title: 'Can I find a nearby Scoots?', 
      content: `
        To download the Scoot app, you can search “Scoot” in both the App and Google Play 
        stores. An even simpler way to do it would be to click the relevant link at the bottom of 
        this page and you’ll be re-directed to the correct page.
      `
    },
    { 
      title: 'Do I need a license to ride?', 
      content: `
        To download the Scoot app, you can search “Scoot” in both the App and Google Play 
        stores. An even simpler way to do it would be to click the relevant link at the bottom of 
        this page and you’ll be re-directed to the correct page.
      `
    },
  ];
  const driving = [
    { 
      title: 'Should I wear a helmet?', 
      content: `
        Yes, please do! All cities have different laws. But we strongly strongly strongly 
        recommend always wearing a helmet regardless of the local laws. We like you and we 
        want you to be as safe as possible while Scooting.
      `
    },
    { 
      title: 'How about the rules & regulations?', 
      content: `
        Yes, please do! All cities have different laws. But we strongly strongly strongly 
        recommend always wearing a helmet regardless of the local laws. We like you and we 
        want you to be as safe as possible while Scooting.
      `
    },
    { 
      title: 'What if I damage my Scoot?', 
      content: `
        Yes, please do! All cities have different laws. But we strongly strongly strongly 
        recommend always wearing a helmet regardless of the local laws. We like you and we 
        want you to be as safe as possible while Scooting.
      `
    },
  ];
  return (
    <div className="container">
      <section className="px-[165px] pt-[60px] pb-[100px]">
        <h2 className="text-center mb-[65px]">FAQs</h2>
        <div className="flex justify-between gap-[30px]">
          <h4 className="w-[30%]">How it works</h4>
          <div className="w-[70%]">
            <Accordion items={works}/>
          </div>
        </div>
        <div className="flex justify-between gap-[30px] mt-[65px]">
          <h4 className="w-[30%]">Safe driving</h4>
          <div className="w-[70%]">
            <Accordion items={driving} />
          </div>
        </div>
      </section>
    </div>
  )
}
