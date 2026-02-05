import JessieXu from "../assets/about-me/jessie.jpg";
import Goldea from "../assets/bvlgari/goldea.jpg";
import ManToPig from "../assets/illustrations/man-to-pig.jpg";
import Jack from "../assets/about-me/jack.jpg";
export default function About() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col w-[80%] gap-y-4">
        <div className="flex flex-row ">
          <img src={JessieXu} alt="Jessie Xu" className="w-[20%]" />
          <div className="flex flex-col items-left pl-4">
            <span className="text-[18px]">About me</span>
            <span className="text-[12px] pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet ex interdum, maximus ipsum ut, tincidunt lacus. Integer sed feugiat purus, varius rutrum ipsum. Praesent a elit a orci commodo dignissim at mollis odio. Aliquam vitae varius neque. Donec ut aliquam sem, a laoreet erat. Nunc at mollis ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In nec tempor nibh. Aenean at odio non tortor scelerisque vestibulum a nec sem.</span>
            <p className="text-[12px] pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet ex interdum, maximus ipsum ut, tincidunt lacus. Integer sed feugiat purus, varius rutrum ipsum. Praesent a elit a orci commodo dignissim at mollis odio. Aliquam vitae varius neque. Donec ut aliquam sem, a laoreet erat. Nunc at mollis ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In nec tempor nibh. Aenean at odio non tortor scelerisque vestibulum a nec sem.</p>
          </div>
        </div>
        <div className="flex flex-row items-left">
          <img src={Goldea} alt="Bvlgari" className="w-[20%]" />
          <div className="flex flex-col items-left pl-4">
          <span className="text-[18px]">Work Experience @ Bvlgari</span>
          <span className="text-[12px] pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet ex interdum, maximus ipsum ut, tincidunt lacus. Integer sed feugiat purus, varius rutrum ipsum. Praesent a elit a orci commodo dignissim at mollis odio. Aliquam vitae varius neque. Donec ut aliquam sem, a laoreet erat. Nunc at mollis ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In nec tempor nibh. Aenean at odio non tortor scelerisque vestibulum a nec sem.</span>
          </div>
        </div>
        <div className="flex flex-row items-left">
          <img src={ManToPig} alt="Man to Pig" className="w-[20%]" />
          <div className="flex flex-col items-left pl-4">
          <span className="text-[18px]">Education</span>
          <span className="text-[12px] pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet ex interdum, maximus ipsum ut, tincidunt lacus. Integer sed feugiat purus, varius rutrum ipsum. Praesent a elit a orci commodo dignissim at mollis odio. Aliquam vitae varius neque. Donec ut aliquam sem, a laoreet erat. Nunc at mollis ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In nec tempor nibh. Aenean at odio non tortor scelerisque vestibulum a nec sem.</span>
          </div>
        </div>
        <div className="flex flex-row items-left">
          <img src={Jack} alt="Jack" className="w-[20%]" />
          <div className="flex flex-col items-left pl-4">
          <span className="text-[18px]">Webtoons</span>
          <span className="text-[12px] pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet ex interdum, maximus ipsum ut, tincidunt lacus. Integer sed feugiat purus, varius rutrum ipsum. Praesent a elit a orci commodo dignissim at mollis odio. Aliquam vitae varius neque. Donec ut aliquam sem, a laoreet erat. Nunc at mollis ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In nec tempor nibh. Aenean at odio non tortor scelerisque vestibulum a nec sem.</span>
          </div>
        </div>
      </div>
    </div>
  )
}
