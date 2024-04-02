import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductsList from "@/components/products-list";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });

  const billboard = await getBillboard("c0194426-858a-48c6-a77f-34d6e028fd49");
  return (
    <div>
      <Container>
        <div className="space-y-10 pb-10">
          <Billboard data={billboard} />
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <ProductsList title="Featured Products" items={products} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
