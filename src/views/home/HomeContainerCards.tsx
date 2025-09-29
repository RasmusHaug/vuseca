import Card, { type CardProps } from "../../components/Card"

const HomeContainerCards = () => {

  const cardsList = [
    {
      title: 'title 1',
      children: <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>,
    },
    {
      title: 'title 2',
      children: <p>Sunt laborum laboris ut amet error nisi eaque id. In sunt minim pariatur totam dolor occaecat. Sunt dolor non aperiam aliquip laboris ipsa dolor: Ad esse eu voluptate nulla ipsum. Dolore rem dolor quasi incididunt accusantium inventore proident dolore pariatur exercitation. Sed non reprehenderit </p>,
    },
    {
      title: 'title 3',
      children: <p>excepteur dolore veritatis labore duis minim nostrud ipsa laborum mollit ut. Unde excepteur voluptatem ab inventore amet velit! Pariatur non exercitation amet occaecat dolore. Eiusmod sit duis in sed aliqua proident eiusmod do officia. Eaque quasi inventore amet iste pariatur tempor. Tempor laborum ullamco doloremque ut non proident veritatis sunt ab consectetur.</p>,
    },
    {
      title: 'title 4',
      children: <p>Nulla ex minim accusantium quasi in lorem ullamco sit excepteur magna quasi ea... Excepteur perspiciatis tempor ut consequat commodo aliqua in. Unde quis quis dolor perspiciatis adipiscing. Nisi velit doloremque beatae aliquip? Excepteur beatae quae eu do excepteur sit ad; Laborum dolore sit in ea </p>,
    },
  ] as const;

  return (
    <div className="w-screen p-4 gap-4 justify-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      {cardsList.map((card: CardProps) => (
        <Card
          key={card.title}
          title={card.title}
        >
          <div className="m-4 text-justify">
            {card.children}
          </div>
        </Card>
      ))}
    </div >
  )
}

export default HomeContainerCards
