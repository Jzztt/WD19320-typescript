import React from "react";

const Lession1 = () => {
  const products = [
    {
      id: 1,
      name: "Samsung",
      productCode: "Samsung-1",
      price: 1000,
    },
    {
      id: 2,
      name: "Iphone",
      productCode: "Iphone-1",
      price: 2000,
    },
    {
      id: 3,
      name: "Nokia",
      productCode: "Nokia-1",
      price: 5000,
    },
  ];
  return (
    <div>
      {" "}
      <h1 className="font-semibold text-center text-blue-500">Hello world!</h1>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-sm font-light text-left">
                <thead className="font-medium border-b dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      ID
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Product Code
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((item) => (
                    <tr className="border-b dark:border-neutral-500">
                      <td className="px-6 py-4 font-medium whitespace-nowrap">
                        {item.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {item.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {item.productCode}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {item.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lession1;
