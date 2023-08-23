import AlbumList from './components/AlbumList';

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: 'Album 1',
      thumbnailUrl:
        'https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/366265767_6268620429917030_1667902845905431127_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_ohc=WThtrtVsGzsAX9XdvCy&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfAYvpYoxyYEJGRK7jxpkr_FCmKwDHf5YUyTjRUhvozcWw&oe=64E9F825',
    },
    {
      id: 2,
      name: 'Album 2',
      thumbnailUrl:
        'https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/366265767_6268620429917030_1667902845905431127_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_ohc=WThtrtVsGzsAX9XdvCy&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfAYvpYoxyYEJGRK7jxpkr_FCmKwDHf5YUyTjRUhvozcWw&oe=64E9F825',
    },
    {
      id: 3,
      name: 'Album 3',
      thumbnailUrl:
        'https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/366265767_6268620429917030_1667902845905431127_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_ohc=WThtrtVsGzsAX9XdvCy&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfAYvpYoxyYEJGRK7jxpkr_FCmKwDHf5YUyTjRUhvozcWw&oe=64E9F825',
    },
  ];
  return (
    <div>
      <h2>Check it out the new albums</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

AlbumFeature.propTypes = {};

export default AlbumFeature;
