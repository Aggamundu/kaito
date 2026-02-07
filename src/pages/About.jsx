import Jack from "../assets/about-me/jack.jpg";
import JessieXu from "../assets/about-me/jessie.jpg";
import Goldea from "../assets/bvlgari/goldea.jpg";
import ManToPig from "../assets/illustrations/man-to-pig.jpg";
export default function About() {
  return (
    <div className="flex flex-col items-center pt-4">
      <div className="flex flex-col w-[80%] gap-y-4">
        <div className="flex flex-col sm:flex-row">
          <img src={JessieXu} alt="Jessie Xu" className="w-[60%] sm:w-[20%] min-w-[250px] h-auto object-contain" />
          <div className="flex flex-col items-left pl-0 pt-4 sm:pl-4 sm:pt-0">
            <span className="text-[18px]">About me</span>
            <span className="text-[12px] pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet ex interdum, maximus ipsum ut, tincidunt lacus. Integer sed feugiat purus, varius rutrum ipsum. Praesent a elit a orci commodo dignissim at mollis odio. Aliquam vitae varius neque. Donec ut aliquam sem, a laoreet erat. Nunc at mollis ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In nec tempor nibh. Aenean at odio non tortor scelerisque vestibulum a nec sem.</span>
            <p className="text-[12px] pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet ex interdum, maximus ipsum ut, tincidunt lacus. Integer sed feugiat purus, varius rutrum ipsum. Praesent a elit a orci commodo dignissim at mollis odio. Aliquam vitae varius neque. Donec ut aliquam sem, a laoreet erat. Nunc at mollis ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In nec tempor nibh. Aenean at odio non tortor scelerisque vestibulum a nec sem.</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-left">
          <img src={Goldea} alt="Bvlgari" className="w-[60%] sm:w-[20%] min-w-[250px] h-auto object-contain" />
          <div className="flex flex-col items-left pl-0 pt-4 sm:pl-4 sm:pt-0">
            <span className="text-[18px]">Work Experience @ Bvlgari</span>
            <span className="text-[12px] pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet ex interdum, maximus ipsum ut, tincidunt lacus. Integer sed feugiat purus, varius rutrum ipsum. Praesent a elit a orci commodo dignissim at mollis odio. Aliquam vitae varius neque. Donec ut aliquam sem, a laoreet erat. Nunc at mollis ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In nec tempor nibh. Aenean at odio non tortor scelerisque vestibulum a nec sem.</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-left">
          <img src={ManToPig} alt="Man to Pig" className="w-[60%] sm:w-[20%] min-w-[250px] h-auto object-contain" />
          <div className="flex flex-col items-left pl-0 pt-4 sm:pl-4 sm:pt-0">
            <span className="text-[18px]">Education</span>
            <span className="text-[12px] pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet ex interdum, maximus ipsum ut, tincidunt lacus. Integer sed feugiat purus, varius rutrum ipsum. Praesent a elit a orci commodo dignissim at mollis odio. Aliquam vitae varius neque. Donec ut aliquam sem, a laoreet erat. Nunc at mollis ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In nec tempor nibh. Aenean at odio non tortor scelerisque vestibulum a nec sem.</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-left">
          <img src={Jack} alt="Jack" className="w-[60%] sm:w-[20%] min-w-[250px] h-auto object-contain" />
          <div className="flex flex-col items-left pl-0 pt-4 sm:pl-4 sm:pt-0">
            <span className="text-[18px]">Webtoons</span>
            <span className="text-[12px] pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet ex interdum, maximus ipsum ut, tincidunt lacus. Integer sed feugiat purus, varius rutrum ipsum. Praesent a elit a orci commodo dignissim at mollis odio. Aliquam vitae varius neque. Donec ut aliquam sem, a laoreet erat. Nunc at mollis ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In nec tempor nibh. Aenean at odio non tortor scelerisque vestibulum a nec sem.</span>
          </div>
        </div>
      </div>
    </div>
  )
}
