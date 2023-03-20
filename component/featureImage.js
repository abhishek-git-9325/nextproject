import Image from "next/image"
import Link from "next/link"

export default function FeaturedImage({post}) {
    let img = '';

    const defaultImg = `/default_image.png`;
    const defaultWidth = "300";
    const defaultHeight = "300";

    if(post.featuredImage){
        let size = post.featuredImage.nodes.mediaDetails.sizes[0];
        img = {
            src: size.sourceUrl,
            width: size.width,
            height: size.height,
        }
    }
    else{
        img = {
            src: defaultImg,
            width: defaultWidth,
            height: defaultHeight,
        }
    }

    return (
        <Link href={`/blog/${post.slug}`}>
            <Image className="w-full objec-cover rounded-xl" src={img.src} width={img.width} height={img.height} alt={post.title}/>
        </Link>
    )
}
