"""empty message

Revision ID: f732099cc396
Revises: 78f97c1cfef1
Create Date: 2023-09-11 18:46:37.104700

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'f732099cc396'
down_revision = '78f97c1cfef1'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('club')
    op.drop_table('campo')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('campo',
    sa.Column('id', sa.INTEGER(), server_default=sa.text("nextval('campo_id_seq'::regclass)"), autoincrement=True, nullable=False),
    sa.Column('campo_name', sa.VARCHAR(length=120), autoincrement=False, nullable=False),
    sa.Column('is_active', sa.BOOLEAN(), autoincrement=False, nullable=False),
    sa.Column('campo_id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.ForeignKeyConstraint(['campo_id'], ['campo.id'], name='campo_campo_id_fkey'),
    sa.PrimaryKeyConstraint('id', name='campo_pkey'),
    sa.UniqueConstraint('campo_name', name='campo_campo_name_key'),
    postgresql_ignore_search_path=False
    )
    op.create_table('club',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('club_name', sa.VARCHAR(length=120), autoincrement=False, nullable=False),
    sa.Column('is_active', sa.BOOLEAN(), autoincrement=False, nullable=False),
    sa.Column('campo_id', sa.INTEGER(), autoincrement=False, nullable=True),
    sa.ForeignKeyConstraint(['campo_id'], ['campo.id'], name='club_campo_id_fkey'),
    sa.PrimaryKeyConstraint('id', name='club_pkey'),
    sa.UniqueConstraint('club_name', name='club_club_name_key')
    )
    # ### end Alembic commands ###