interface IDocumentPage {
  params: {
    slug: string;
  };
}

export default function DocumentPage({ params }: IDocumentPage) {
  return (
    <div>
      <h1>document {params.slug}</h1>
    </div>
  );
}
