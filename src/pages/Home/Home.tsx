import { Container } from "@/components/shared";
import classes from "./Home.module.scss";

// interface Props {}

const Home = ({ tg }: { tg: any }) => {
	const onClose = () => {
		tg.onClose();
	};
	return (
		<div className={classes.main}>
			<Container>
				<h1>Home page</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum vero fugit culpa sequi voluptatibus voluptates placeat vitae eum deleniti. Rem animi, deserunt
					laudantium, alias eius tempore eaque reiciendis minima quidem asperiores quasi? Dicta, quae eaque. Laudantium, necessitatibus nam officia voluptatum doloribus ea ullam,
					animi quia dolorem commodi repellat culpa, exercitationem eligendi ratione! Ullam pariatur ducimus nulla dignissimos repellendus obcaecati dolore porro itaque dolores,
					quia in aut culpa, autem quaerat repudiandae! Fuga eligendi illo nam et voluptate cum minus, enim commodi suscipit quod sunt alias sed consequatur inventore labore
					repellendus quo in sapiente ea nesciunt, repellat id obcaecati a! Nihil eveniet, quam sapiente corrupti quasi quae id quo error nostrum optio aliquam hic reprehenderit
					molestias dolore iusto cumque eligendi corporis in doloribus ducimus minus vel veniam ratione atque? Omnis officiis nostrum quia aliquid non voluptatem facere. Quod
					commodi dignissimos, omnis vel velit nostrum numquam distinctio! Natus reprehenderit ipsa obcaecati, doloribus deserunt aspernatur quo consectetur expedita animi quae
					consequuntur quos eius nobis ratione unde repellat explicabo vero aut atque inventore minus tempora quisquam esse. Dolorum exercitationem ab ullam, quas eaque adipisci
					quam maxime suscipit deleniti reprehenderit laborum est dolores, facere maiores voluptate. Maiores odio nisi doloremque quisquam excepturi doloribus earum illum quidem,
					itaque neque iusto aut accusamus praesentium! Distinctio, explicabo dolorum nulla corporis sint expedita inventore quasi eos, ipsa numquam veniam cumque ea suscipit, quia
					exercitationem velit? Numquam, cum explicabo magni reprehenderit itaque dolorem commodi. Quis vitae rem, illum laborum ullam sequi laboriosam praesentium impedit quasi
					soluta quo. Modi vero natus nobis saepe voluptatibus distinctio maiores atque, dignissimos ipsa minima excepturi fuga aspernatur voluptate sit delectus ab dolores
					repellat possimus illo et quos ad? Corporis corrupti fugit est temporibus ea dolorum praesentium? Consequuntur maiores est nam molestiae laudantium repellat quisquam quis
					quibusdam doloremque optio quod eius deserunt, aut adipisci similique saepe impedit inventore ipsa libero? Facere temporibus nam repellat minima, exercitationem rerum,
					non tempora soluta eum et eligendi quo maxime totam. Qui laudantium provident, officiis voluptatibus dolorum sed modi, facere rerum adipisci numquam cupiditate aliquid
					vel porro dolore dolorem! Dolores unde omnis molestiae suscipit non nam autem repellendus recusandae vitae reiciendis. At a consequuntur sapiente sed architecto,
					distinctio saepe dolores quisquam consectetur repellat optio, cumque culpa molestiae. Non eligendi incidunt expedita quas cupiditate modi autem perferendis sapiente,
					minus laboriosam distinctio quia excepturi, in quis consectetur sit exercitationem quisquam rerum quidem inventore animi qui error. Nobis animi distinctio iste tenetur
					nesciunt sint corrupti?
				</p>

				<button onClick={onClose}>Close</button>
			</Container>
		</div>
	);
};

export default Home;
