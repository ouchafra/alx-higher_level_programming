# 14-model_city_fetch_by_state.py

import sys
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from model_state import Base, State, City

if __name__ == "__main__":
    if len(sys.argv) != 4:
        print("Usage: {} <mysql_username> <mysql_password> <database_name>".format(sys.argv[0]))
        sys.exit(1)

    username, password, db_name = sys.argv[1], sys.argv[2], sys.argv[3]
    engine = create_engine('mysql+mysqldb://{}:{}@localhost:3306/{}'.format(username, password, db_name))

    Base.metadata.create_all(engine)
    Session = sessionmaker(bind=engine)
    session = Session()

    # Retrieve and print City objects sorted by id
    cities = session.query(City).order_by(City.id).all()
    for city in cities:
        state_name = session.query(State.name).filter_by(id=city.state_id).scalar()
        print("{}: ({}) {}".format(state_name, city.id, city.name))

    session.close()
