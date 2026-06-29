import { MenuIcon } from "lucide-react";

export default function Features() {
  return (
    <section id="features">
      <div className="space-y-4">
        <h4 className="sub-heading">features</h4>
        <h2 className="text-lightn">What I Do</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-15 justify-center items-center">
        <div className="bg-bg-linear-1 shadow-shadow-1 p-10 rounded-md space-y-4">
          <MenuIcon className="size-12 text-primary" />
          <h4 className="text-lightn mt-6 font-poppins">Business Stratagy</h4>
          <p className="text-lightn  font-poppins">
            I throw myself down among the tall grass by the stream as Ilie close
            to the earth.
          </p>
        </div>
        <div className="bg-bg-linear-1 shadow-shadow-1 p-10 rounded-md space-y-4">
          <MenuIcon className="size-12 text-primary  font-poppins" />
          <h4 className="text-lightn mt-6  font-poppins">Business Stratagy</h4>
          <p className="text-lightn">
            I throw myself down among the tall grass by the stream as Ilie close
            to the earth.
          </p>
        </div>
        <div className="bg-bg-linear-1 shadow-shadow-1 p-10 rounded-md space-y-4">
          <MenuIcon className="size-12 text-primary  font-poppins" />
          <h4 className="text-lightn mt-6  font-poppins">Business Stratagy</h4>
          <p className="text-lightn">
            I throw myself down among the tall grass by the stream as Ilie close
            to the earth.
          </p>
        </div>
      </div>
    </section>
  );
}
