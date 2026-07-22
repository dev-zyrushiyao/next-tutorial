import Button from "./components/button";
import CompanyUpdates from "./components/company-updates";

export default function Home() {
  return (
    <main className="px-20 py-10 flex flex-col gap-5">
      <div>
        <h3 className="text-primary font-serif font-semibold text-3xl tracking-wide">
          Title
        </h3>
        <p className="text-idle font-sans font-normal text-xl leading-10 py-3 tracking-wide">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          non sunt iure ratione! Nemo omnis provident pariatur cum, ducimus
          suscipit sed consequuntur a unde in nisi debitis mollitia nesciunt
          quaerat! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Placeat accusamus quibusdam animi itaque dignissimos quae, explicabo
          asperiores illo enim ex? Vitae perspiciatis corporis mollitia suscipit
          rerum dolorem sequi nisi placeat! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Fugit nulla blanditiis voluptas quo nemo
          accusamus aperiam nostrum similique natus culpa quae ducimus illo eius
          dolorum delectus, debitis sunt? Minus, voluptatibus?
        </p>
        <div className="text-center">
          <Button label="View Tickets"></Button>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h3 className="text-primary font-serif font-semibold text-3xl tracking-wide">
          Company updates
        </h3>
        <CompanyUpdates text="RAT"></CompanyUpdates>
        <CompanyUpdates></CompanyUpdates>
        <CompanyUpdates></CompanyUpdates>
        <CompanyUpdates></CompanyUpdates>
      </div>
    </main>
  );
}
