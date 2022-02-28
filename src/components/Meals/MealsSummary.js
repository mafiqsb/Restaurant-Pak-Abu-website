import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Makanan Lazat, Istimewanya kepada Anda</h2>
      <p>
      Pilih hidangan kegemaran anda daripada pelbagai pilihan makanan yang tersedia
        dan nikmati makan tengah hari atau makan malam yang lazat di rumah.
      </p>
      <p>
      Semua hidangan kami dimasak dengan bahan-bahan berkualiti tinggi, tepat pada masanya dan
        sudah tentu oleh chef berpengalaman!
      </p>
    </section>
  );
};

export default MealsSummary;
