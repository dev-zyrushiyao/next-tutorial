import PrimaryButton from "./components/PrimaryButton";
import CompanyUpdates from "./components/CompanyUpdates";

export default function Home() {
  return (
    <main className="flex flex-col gap-5">
      <div>
        <h3>Dashboard</h3>
        <p>
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
          <PrimaryButton label="View Tickets" />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h3>Company updates</h3>
        <CompanyUpdates text="RAT"></CompanyUpdates>
        <CompanyUpdates></CompanyUpdates>
        <CompanyUpdates></CompanyUpdates>
        <CompanyUpdates></CompanyUpdates>
      </div>
    </main>
  );
}
